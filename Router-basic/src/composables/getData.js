import { ref } from "vue";
import axios from "axios";

export const useGetData = () => {
  const errorData = ref(null)
  const data = ref(null);
  const loading = ref(true);
  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data;
      console.log(pokeInfo);
    } catch (error) {
      errorData.value = "error del servidor"    
    } finally {
      loading.value = false;
    }
  };
  return {
    getData,
    data,
    loading,
    errorData,
  };
};
