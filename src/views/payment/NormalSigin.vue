<template>
  <div class="app flex-row" ref="fileform" >
    <div class="w-100">
      <div class="profile-header">
        <div class="user-happy">
          <img src="img/avatars/NoPath@3x.png">
          <div class="ml-3">
            <h1>We are happy to see you again Suzanne Thompson!</h1>
            <span class="comments">CoffeeSign even takes care reminding our clients!</span>
          </div>
        </div>
        <div class="user-actions">
          <div class="user-action">
            <div class="action-numbers">0</div>
            <div class="action-type">Action Required</div>
          </div>
          <div class="user-action">
            <div class="action-numbers">1</div>
            <div class="action-type">Waiting for Others</div>
          </div>
          <div class="user-plan">
            <div>
              <img src="img/payment/upgrad.png">
            </div>
            <div class="upgrade-content">
              <div class="upgrade-to">
                Upgrade to Standard plan
              </div>
              <div class="comments">
                Upgrade now and enjoy additional features.
              </div>
              <b-link class="click-here" >Click here to upgrade</b-link>
            </div>

          </div>
        </div>
      </div>
      <hr class="mb-4"/>
      <div class="row">
        <div class="col-md-3">
          <div class="content-card sign-signature">
            <div class="header">SIGNATURE</div>
            <div class="sign">Suzanne Thompson</div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="content-card sign-signature">
                <div class="header">INITIALS</div>
                <div class="sign initials">ST</div>
              </div>
            </div>
            <div class="col-6">
              <div class="content-card sign-signature">
                <div class="header">SIGNATURE</div>
                <div class="sign">
                  <img src="img/payment/stamp.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="drag-drop-container" v-bind:class="{'drag-has-file':files.length>0}">
            <form class="drag-drop-div" v-bind:class="{'has-files':files.length>0}">
              <img src="img/add_doc/folder-2.png"
                srcset="img/add_doc/folder-2@2x.png 2x,
                        img/add_doc/folder-2@3x.png 3x"
                class="folder-2">
              <div v-bind:class="{'text-left ml-3':files.length>0}">
                <div class="drag-a-file" v-bind:class="{'has-file':files.length>0}">
                  Drag a file here or <span class="text-style-1">browse</span> for a file to upload
                </div>
                <div class="you-can-use " v-bind:class="{'text-left':files.length>0}">
                  Or you can use one of the following options:
                </div>
              </div>
              <div class="store-src" v-bind:class="{'mt-0':files.length>0}">
                <img src="img/add_doc/dropbox.png"
                  srcset="img/add_doc/dropbox@2x.png 2x,
                          img/add_doc/dropbox@3x.png 3x"
                  class="store-src-item">
                <img src="img/add_doc/google-drive.png"
                  srcset="img/add_doc/google-drive@2x.png 2x,
                          img/add_doc/google-drive@3x.png 3x"
                  class="store-src-item">
                <img src="img/add_doc/onedrive.png"
                  srcset="img/add_doc/onedrive@2x.png 2x,
                          img/add_doc/onedrive@3x.png 3x"
                  class="store-src-item">
                <img src="img/add_doc/box.png"
                  srcset="img/add_doc/box@2x.png 2x,
                          img/add_doc/box@3x.png 3x"
                  class="store-src-item">
              </div>
              <div class="you-can-use"  v-bind:class="{'d-none':files.length>0}">
                Or you can use your templates
              </div>
              <b-button variant="outline-primary" v-bind:class="{'mt-0':files.length>0}">
                Go to My Templates
              </b-button>
            </form>
          </div>
          <div class="file-list">
            <div v-for="(file, index) in files" :key="index" class="file-listing">
              <div class="file-content">
                <img v-bind:src="getFileType(file.name)" class="folder-2">
                <div class="file-info ml-3">
                  <div class="doc-file-name">{{ file.name }}</div>
                  <div class="doc-file-info">5 pages</div>
                </div>
              </div>
              <div class="file-control">
                <i class="fa fa-ellipsis-h fa-lg mr-4"></i>
                <i class="fa fa-trash fa-lg "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="message">
      <UserIcon icon='msg-smile.png'/>
    </div>
  </div>
</template>

<script>
import UserIcon from '../../components/UserIcon'

export default {
  name: "NormalSign",
  components: {
    UserIcon
  },
  data() {
    return {
      dragAndDropCapable: false,
      files: []
    }
  },
  methods: {
    getFileType(fileName){ 
      return "img/add_doc/" + fileName.substr(fileName.length - 3 )+".png";
    },
    determineDragAndDropCapable(){
      var div = document.createElement('div');
      return ( ( 'draggable' in div )
              || ( 'ondragstart' in div && 'ondrop' in div ) )
              && 'FormData' in window
              && 'FileReader' in window;
    },
    addRecipient() {
      this.recipients.push({
          sign_type: 'Need to sign',
          com_type: false,
          name: '',
          email: '',
          set_password: false,
          password: '',
          confirm_password: ''
      })
    },
    removeRecipient(index){
      this.recipients.splice(index, 1);
    }

  },
  mounted(){
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if( this.dragAndDropCapable ){
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
        this.$refs.fileform.addEventListener(evt, function(e){
          e.preventDefault();
          e.stopPropagation();
        }.bind(this), false);
      }.bind(this));

      this.$refs.fileform.addEventListener('drop', function(e) {
        for( let i = 0; i < e.dataTransfer.files.length; i++ ){
          this.files.push( e.dataTransfer.files[i] );
        }
      }.bind(this));
    }
  },
};
</script>

<style lang="scss">
@import "./NormalSigin.scss";
@import "../document/AddDocuments.scss";
</style>

