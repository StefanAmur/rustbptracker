var bpapp = angular.module('bptrackerApp', []);

bpapp.controller('bptrackerCtrl', function ($scope){
	$scope.frags = [
		{	'name': 'Large Furnace',
			'img': 'Large_Furnace_icon.png'
		},
		{	'name': 'Large Wood Box',
			'img': 'Large_Wood_Box_icon.png'
		},
		{	'name': 'Leather Gloves',
			'img': 'Leather_Gloves_icon.png'
		},
		{	'name': 'Machete',
			'img': 'Machete_icon.png'
		},
		{	'name': 'Medical Syringe',
			'img': 'Medical_Syringe_icon.png'
		},
		{	'name': 'Metal Horizontal Embrasure',
			'img': 'Metal_horizontal_embrasure_icon.png'
		},
		{	'name': 'Metal Vertical Embrasure',
			'img': 'Metal_Vertical_embrasure_icon.png'
		},
		{	'name': 'Pistol Bullet',
			'img': 'Pistol_Bullet_icon.png'
		},
		{	'name': 'Salvaged Shelves',
			'img': 'Salvaged_Shelves_icon.png'
		},
		{	'name': 'Salvaged Sword',
			'img': 'Salvaged_Sword_icon.png'
		},
		{	'name': 'Stone Spear',
			'img': 'Stone_Spear_icon.png'
		},
		{	'name': 'Wood Armor Pants',
			'img': 'Wood_Armor_Pants_icon.png'
		},
		{	'name': 'Wood Chestplate',
			'img': 'Wood_Chestplate_icon.png'
		},
		{	'name': 'Wood Shutters',
			'img': 'Wood_Shutters_icon.png'
		},
		{
			'name': 'Stone Barricade',
			'img': 'Stone_Barricade_icon.png'
		},
		{	'name': 'Wooden Floor Spikes',
			'img': 'Wooden_Floor_Spikes_icon.png'
		},
		{	'name': 'Single Sign Post',
			'img': 'Signle_Sign_Post_icon.png'
		}
	];
	$scope.pages = [
		{
			'name': '5.56 Rifle Ammo',
			'img': '5.56_Rifle_Ammo_icon.png'
		},
		{
			'name': '12 Gauge Buckshot',
			'img': '12_Gauge_Buckshot_icon.png'
		},
		{
			'name': 'Acoustic Guitar',
			'img': 'Acoustic_Guitar_icon.png'
		},
		{
			'name': 'Beancan Grenade',
			'img': 'Beancan_Grenade_icon.png'
		},
		{
			'name': 'Bed',
			'img': 'Bed_icon.png'
		},
		{
			'name': 'Bone Armor Pants',
			'img': 'Bone_Armor_Pants_icon.png'
		},
		{
			'name': 'Bone Jacket',
			'img': 'Bone_Jacket_icon.png'
		},
		{
			'name': 'Boonie Hat',
			'img': 'Boonie_Hat_icon.png'
		},
		{
			'name': 'Bucket Helmet',
			'img': 'Bucket_Helmet_icon.png'
		},
		{
			'name': 'Crossbow',
			'img': 'Crossbow_icon.png'
		},
		{
			'name': 'Explosives',
			'img': 'Explosives_icon.png'
		},
		{
			'name': 'Hachet',
			'img': 'Hatchet_icon.png'
		},
		{
			'name': 'Hazmat Boots',
			'img': 'Hazmat_Boots_icon.png'
		},
		{
			'name': 'Hazmat Gloves',
			'img': 'Hazmat_Gloves_icon.png'
		},
		{
			'name': 'Hazmat Jacket',
			'img': 'Hazmat_Jacket_icon.png'
		},
		{
			'name': 'Hazmat Pants',
			'img': 'Hazmat_Pants_icon.png'
		},
		{
			'name': 'High External Wooden Gate',
			'img': 'High_External_Wooden_Gate_icon.png'
		},
		{
			'name': 'High External Wooden Wall',
			'img': 'High_External_Wooden_Wall_icon.png'
		},
		{
			'name': 'High Velocity Arrow',
			'img': 'High_Velocity_Arrow_icon.png'
		},
		{
			'name': 'Improvised Balaclava',
			'img': 'Improvised_Balaclava_icon.png'
		},
		{
			'name': 'Lantern',
			'img': 'Lantern_icon.png'
		},
		{
			'name': 'Large Medkit',
			'img': 'Large_Medkit_icon.png'
		},
		{
			'name': 'Mining Quarry',
			'img': 'Mining_Quarry_icon.png'
		},
		{
			'name': 'Revolver',
			'img': 'Revolver_icon.png'
		},
		{
			'name': 'Riot Helmet',
			'img': 'Riot_Helmet_icon.png'
		},
		{
			'name': 'Salvaged Axe',
			'img': 'Salvaged_Axe_icon.png'
		},
		{
			'name': 'Salvaged Hammer',
			'img': 'Salvaged_Hammer_icon.png'
		},
		{
			'name': 'Small Oil Refinery',
			'img': 'Small_Oil_Refinery_icon.png'
		},
		{
			'name': 'Large Wooden Sign',
			'img': 'Large_Wooden_Sign_icon.png'
		},
		{
			'name': 'Snap Trap',
			'img': 'Snap_Trap_icon.png'
		},
		// {
		// 	'name': 'Snow Jacket - Black',
		// 	'img': 'Snow_Jacket_-_Black_icon.png'
		// },
		{
			'name': 'Survey Charge',
			'img': 'Survey_Charge_icon.png'
		},
		{
			'name': 'Barbed Wooden Barricade',
			'img': 'Barbed_Wooden_Barricade_icon.png'
		},
		{
			'name': 'Double Sign Post',
			'img': 'Double_Sign_Post_icon.png'
		},
		{
			'name': 'Landscape Picture Frame',
			'img': 'Landscape_Picture_Frame_icon.png'
		},
		{
			'name': 'One Sided Town Sign Post',
			'img': 'One_Sided_Town_Sign_Post_icon.png'
		},
		{
			'name': 'Portrait Picture Frame',
			'img': 'Portrait_Picture_Frame_icon.png'
		},
		{
			'name': 'Reinforced Window Bars',
			'img': 'Reinforced_Window_Bars_icon.png'
		},
		{
			'name': 'Miners Hat',
			'img': 'Miners_Hat_icon.png'
		},
		{
			'name': 'Metal Barricade',
			'img': 'Metal_Barricade_icon.png'
		},
		{
			'name': 'Tall Picture Frame',
			'img': 'Tall_Picture_Frame_icon.png'
		},
		{	'name': 'Sandbag Barricade',
			'img': 'Sandbag_Barricade_icon.png'
		},
		{
			'name': 'Large Water Catcher',
			'img': 'Large_Water_Catcher_icon.png'
		},
		{
			'name': 'Jacket',
			'img': 'Jacket_icon.png'
		},
		{	'name': 'Wooden Sign',
			'img': 'Wooden_Sign_icon.png'
		},
		{	'name': 'Two Sided Hanging Sign',
			'img': 'Two_Sided_Hanging_Sign_icon.png'
		}
	];
	$scope.books = [
		{
			'name': '12 Gauge Slug',
			'img': '12_Gauge_Slug_icon.png'
		},
		{
			'name': 'Coffe Can Helmet',
			'img': 'Coffee_Can_Helmet_icon.png'
		},
		{
			'name': 'Concrete Barricade',
			'img': 'Concrete_Barricade_icon.png'
		},
		{
			'name': 'Explosive 5.56 Rifle Ammo',
			'img': 'Explosive_5.56_Rifle_Ammo_icon.png'
		},
		{
			'name': 'F1 Grenade',
			'img': 'F1_Grenade_icon.png'
		},
		{
			'name': 'Hazmat Helmet',
			'img': 'Hazmat_Helmet_icon.png'
		},
		{
			'name': 'High Velocity Rocket',
			'img': 'High_Velocity_Rocket_icon.png'
		},
		{
			'name': 'Huge Wooden Sign',
			'img': 'Huge_Wooden_Sign_icon.png'
		},
		{
			'name': 'HV 5.56 Rifle Ammo',
			'img': 'HV_5.56_Rifle_Ammo_icon.png'
		},
		{
			'name': 'HV Pistol Ammo',
			'img': 'HV_Pistol_Ammo_icon.png'
		},
		{
			'name': 'Incendiary 5.56 Rifle Ammo',
			'img': 'Incendiary_5.56_Rifle_Ammo_icon.png'
		},
		{
			'name': 'Incendiary Pistol Bullet',
			'img': 'Incendiary_Pistol_Bullet_icon.png'
		},
		{
			'name': 'Incendiary Rocket',
			'img': 'Incendiary_Rocket_icon.png'
		},
		{
			'name': 'Land Mine',
			'img': 'Land_Mine_icon.png'
		},
		{
			'name': 'Longsword',
			'img': 'Longsword_icon.png'
		},
		{
			'name': 'Mace',
			'img': 'Mace_icon.png'
		},
		{
			'name': 'Pick Axe',
			'img': 'Pick_Axe_icon.png'
		},
		{
			'name': 'Pump Shotgun',
			'img': 'Pump_Shotgun_icon.png'
		},
		{
			'name': 'Road Sign Jacket',
			'img': 'Road_Sign_Jacket_icon.png'
		},
		{
			'name': 'Road Sign Kilt',
			'img': 'Road_Sign_Kilt_icon.png'
		},
		{
			'name': 'Rocket',
			'img': 'Rocket_icon.png'
		},
		{
			'name': 'Salvaged Cleaver',
			'img': 'Salvaged_Cleaver_icon.png'
		},
		{
			'name': 'Salvaged Ice Pick',
			'img': 'Salvaged_Icepick_icon.png'
		},
		{
			'name': 'Semi-Automatic Pistol',
			'img': 'Semi-Automatic_Pistol_icon.png'
		},
		{
			'name': 'Snow Jacket - Red',
			'img': 'Snow_Jacket_-_Red_icon.png'
		},
		{
			'name': 'Thompson',
			'img': 'Thompson_icon.png'
		},
		{
			'name': 'Large Banner Hanging',
			'img': 'Large_Banner_Hanging_icon.png'
		},
		{
			'name': 'Large Banner On Pole',
			'img': 'Large_Banner_on_pole_icon.png'
		},
		{
			'name': 'Two Sided Ornate Hanging Sign',
			'img': 'Two_Sided_Ornate_Hanging_Sign_icon.png'
		},
		{
			'name': 'Two Sided Town Sign Post',
			'img': 'Two_Sided_Town_Sign_Post_icon.png'
		},
		{
			'name': 'XL Picture Frame',
			'img': 'XL_Picture_Frame_icon.png'
		},
		{
			'name': 'XXL Picture Frame',
			'img': 'XXL_Picture_Frame_icon.png'
		},
		{
			'name': 'Semi-Automatic Rifle',
			'img': 'Semi-Automatic_Rifle_icon.png'
		}


	];
	$scope.libs = [
		{
			'name': 'Assault Rifle',
			'img': 'Assault_Rifle_icon.png'
		},
		{
			'name': 'Auto Turret',
			'img': 'Auto_Turret_icon.png'
		},
		{
			'name': 'Bolt Action Rifle',
			'img': 'Bolt_Action_Rifle_icon.png'
		},
		{
			'name': 'Custom SMG',
			'img': 'Custom_SMG_icon.png'
		},
		{
			'name': 'High external Stone Gate',
			'img': 'High_External_Stone_Gate_icon.png'
		},
		{
			'name': 'High External Stone Wall',
			'img': 'High_External_Stone_Wall_icon.png'
		},
		{
			'name': 'Holosight',
			'img': 'Holosight_icon.png'
		},
		{
			'name': 'Metal Chest Plate',
			'img': 'Metal_Chest_Plate_icon.png'
		},
		{
			'name': 'Metal Facemask',
			'img': 'Metal_Facemask_icon.png'
		},
		{
			'name': 'Rocket Launcher',
			'img': 'Rocket_Launcher_icon.png'
		},
		{
			'name': 'Silencer',
			'img': 'Silencer_icon.png'
		},
		{
			'name': 'Timed Explosive Charge',
			'img': 'Timed_Explosive_Charge_icon.png'
		},
		{
			'name': '4x Zoom Scope',
			'img': '4x_Zoom_Scope_icon.png'
		},
		{
			'name': 'Lasersight',
			'img': 'Weapon_Lasersight_icon.png'
		},
		{
			'name': 'Flashlight',
			'img': 'Weapon_Flashlight_icon.png'
		}

	];
})
