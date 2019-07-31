<template>
  <div class="app flex-row ">
    <div class="w-100">
      <h1>Add Documents</h1>
      <hr>
      <div class="drag-drop-container" v-bind:class="{'drag-has-file':files.length>0}">
        <form ref="fileform" class="drag-drop-div" v-bind:class="{'has-files':files.length>0}">
          <img src="img/add_doc/folder-2.png"
            srcset="img/add_doc/folder-2@2x.png 2x,
                    img/add_doc/folder-2@3x.png 3x"
            class="folder-2">
          <div v-bind:class="{'text-left ml-3':files.length>0}">
            <div class="drag-a-file" v-bind:class="{'has-file':files.length>0}">
              Drag a file here or 
              <b-button variant="link"><span class="text-style-1">browse</span></b-button>
              for a file to upload
            </div>
            <div class="you-can-use " v-bind:class="{'text-left':files.length>0}">
              Or you can use one of the following options:
            </div>
          </div>
          <div class="store-src" v-bind:class="{'mt-0':files.length>0}">
            <img src="img/add_doc/dropbox.png"
              class="store-src-item">
            <img src="img/add_doc/google-drive.png"
              class="store-src-item">
            <img src="img/add_doc/onedrive.png"
              class="store-src-item">
            <img src="img/add_doc/box.png"
              class="store-src-item">
          </div>
          <div class="you-can-use"  v-bind:class="{'d-none':files.length>0}">
            Or you can use your templates
          </div>
          <b-button variant="outline-primary" :class="{'mt-2':files.length==0}">
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
            <i class="fa fa-trash "></i>
          </div>
        </div>
        <div v-if="files.length>0">
          <div class="file-listing w-100">
            <div class="file-content w-100">
              <img v-bind:src="getFileType(files[0].name)" class="folder-2">
              <div class="file-info ml-3 w-100">
                <div class="doc-file-name">168 KB of 378 KB (56% Done)</div>
                <div class="text-right">
                  <i class="fa fa-times-circle-o"></i>
                  <b-progress :value="56" :max="100" class="mt-10"></b-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end pt-4 align-items-center">
        <b-form-checkbox >I am the only signer</b-form-checkbox>
        <button class="btn btn-primary min-width-124px ml-3" v-on:click="moveNextPage()">Next</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AddDocument',
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
    moveNextPage(){
      this.$router.push('/add-recipients');
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
}
</script>

<style lang="scss">
@import './AddDocuments.scss'
</style>

