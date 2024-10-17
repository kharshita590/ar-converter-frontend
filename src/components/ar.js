import '../App.css';
import MenuItem from './menu-item/menu-item';
function Arjs() {
  return (
    <div className="App">
      <div className="header">AR Food Menu App</div>
      {/* <model-viewer 
        src="https://modelviewer.dev/shared-assets/models/Astronaut.glb" 
        ios-src="https://developer.apple.com/augmented-reality/quick-look/models/biplane/toy_biplane.usdz"
        camera-controls 
        ar
        xr-environment
        alt="Cheese Burger Model"></model-viewer> */}
        <MenuItem 
        androidSource="assets\models\android\salmon_tartine_scene.glb"
        iosSource="assets\models\ios\Salmon_tartine.usdz"
        alternateName="Salmon Tartine"
        />
        <MenuItem 
        androidSource="assets\models\android\pizza_bigboss_pancho_scene.glb"
        iosSource="assets\models\ios\Pizza_BigBoss_Pancho.usdz"
        alternateName="Pizza"
        />
        <MenuItem 
        androidSource="assets\models\android\salad_head_Scene.glb"
        iosSource="assets\models\ios\Salad_head.usdz"
        alternateName="Fruit and Veggie Salad"
        />
        <MenuItem 
        androidSource="assets\models\android\filipino_breakfast.glb"
        iosSource="assets\models\ios\filipino_breakfast.usdz"
        alternateName="Filipino Breakfast"
        />
        <MenuItem 
        androidSource="assets\models\android\farmhouse_scramble-olive__finch.glb"
        iosSource="assets\models\ios\Farmhouse_Scramble-Olive__Finch.usdz"
        alternateName="Farmhouse Scramble - Olive Finch"
        />
        {/* <MenuItem 
        androidSource="assets\models\android\cheeseburger.glb"
        iosSource="assets\models\ios\Simple_Cheeseburger.usdz"
        alternateName="Cheese Burger"
        /> */}
    </div>
  );
}

export default Arjs;
