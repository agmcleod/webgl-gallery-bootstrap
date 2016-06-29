import AssetLoader from './asset_loader';
import Gallery from './gallery';
import InputManager, {KEYS} from './input';

let time;
function update() {
  const currentTime = Date.now();
  const delta = currentTime - time;
  time = currentTime;
  requestAnimationFrame(update);
}

AssetLoader.loadAtlas(function(atlas) {
  atlas.buildRegions();
  const canvas = document.getElementById('canvas');
  AssetLoader.loadShaderCode(function(vert, frag) {
    InputManager.bind();

    const gallery = new Gallery(atlas, canvas.clientWidth, canvas.clientHeight);
    gallery.buildGalleryImages();
    time = Date.now();
    requestAnimationFrame(update);
  });
});
