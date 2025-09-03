// Require Dotenv
require("dotenv").config();
// Require the cloudinary library
const cloudinary = require("cloudinary").v2;

// Return "https" URLs by setting secure: true
cloudinary.config({
  secure: true,
});

////////////////////////////////////////////
// Documentation:
// Basic upload: https://cloudinary.com/documentation/image_upload_api_reference#upload
// Presets: https://cloudinary.com/documentation/admin_api#create_an_upload_preset
// On success: https://cloudinary.com/documentation/upload_parameters#on_success_update_metadata_after_upload
////////////////////////////////////////////

////////////////////////////////////////////
// Example image upload:
// cloudinary.uploader
//   .upload("hat.jpg", {
//     use_filename: true,
//     resource_type: "auto",
//   })
//   .then((result) => console.log(result));
////////////////////////////////////////////

////////////////////////////////////////////
// Upload Challenge #1
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload the image with the following parameters:
//    public_id (choose your own)
//    asset_folder/folder (choose your own - helpful to put all practice uploads into a single folder)
//    resource_type (choose the appropriate type)
//    colors
//    tags (choose your own)
////////////////////////////////////////////
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg",
    {
      public_id: "dog_practice",
      //asset_folder: "image_practice",
      //folder: "image_practice",
      resource_type: "auto",
      colors: true,
      tags: "animal,dog,image",
    }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Upload Challenge #2
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Create an upload preset and then use it:
//    Preset:
//        name
//        transformation - crop the image and use f_auto, q_auto, & g_auto
//    Upload:
//        public_id
//        asset_folder / folder;
//        upload_preset
////////////////////////////////////////////
cloudinary.api
  .create_upload_preset({
    name: "practice_preset",
    transformation: "w_200,f_auto,g_auto,q_auto",
  })
  .then((result) => console.log(result));

cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg",
    {
      upload_preset: "practice_preset",
      public_id: "dog_preset",
      //asset_folder: "image_practice",
      //folder: "image_practice",
    }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Upload Challenge #3
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload w/ auto tagging:
//    public_id
//    asset_folder/folder
//    auto_tagging - set at 0.7
//    detection/categorization (depending on which type you choose - may need to signup for an add-on to test)
////////////////////////////////////////////
cloudinary.uploader
  .upload(
    "https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg",
    {
      public_id: "dog_auto_tag",
      //asset_folder: "image_practice",
      //folder: "image_practice",
      categorization: "google_tagging",
      auto_tagging: 0.7,
    }
  )
  .then((result) => console.log(result));

////////////////////////////////////////////
// Upload Challenge #4
// Image: https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg
// Upload w/ on_success:
//    public_id
//    asset_folder/folder
//    on_sucess - add metadata of your choice to the image
////////////////////////////////////////////
cloudinary.uploader.upload(
  "https://cdn.pixabay.com/photo/2025/03/22/07/09/havanese-dog-9486395_1280.jpg",
  {
    public_id: "test_onSuccess",
    //asset_folder: "image_practice",
    //folder: "image_practice",
    on_success: 'current_asset.update({context: {caption: "Sample Image"}})',
  },
  (error, result) => {
    console.error("Error", error);
    console.log("Response", result);
  }
);
