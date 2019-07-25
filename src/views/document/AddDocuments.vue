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
              Drag a file here or <span class="text-style-1">browse</span> for a file to upload
            </div>
            <div class="you-can-use">
              Or you can use one of the following options:
            </div>
          </div>
          <div class="store-src">
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
        <div v-for="file in files" :key="file" class="file-listing">
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
          console.log(e.dataTransfer.files[i]);
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

