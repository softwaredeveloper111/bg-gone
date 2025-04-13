import axios from "axios";
const BASE_URL = "https://techhk.aoscdn.com";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchremovalbackgroundAPI = async (file) => {
  //  upload the image
  const task_id = await uploadImage(file);
  console.log("Task ID ", task_id);

  // get the final image
  const answer = await pollForRemoval(task_id);
  return answer
};

const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(
      `${BASE_URL}/api/tasks/visual/segmentation`,
      formData,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    

    return data?.data?.task_id;
  } catch (error) {
    console.log(error.message);
  }
};





const getFinalImage = async (task_id) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/api/tasks/visual/segmentation/${task_id}`,
      {
        headers: {
          "X-API-KEY": API_KEY,
        },
      }
    );

    return data?.data;
  } catch (error) {
    console.log(error.message);
  }
};






async function pollForRemoval(task_id, retries = 0){
  try {
    const result = await getFinalImage(task_id);
    if (result.state === 4) {
      console.log("procssing img..");
      if (retries >= 20) {
        throw new Error("maximum retries reached, please try again later");
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return pollForRemoval(task_id, retries + 1);
    }

    if (result?.err_message) {
      alert("plese provide a small resolution picture.");
    }

  return result

  } catch (error) {
    console.log(error.message);
  }
};
