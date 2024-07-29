import { ref } from 'vue';
const isErrorOpen = ref(false);
const errorText = ref('');

export const useErrorNotification = () => {
  const open = (dialogCaption: string) => {
    isErrorOpen.value = true;
    errorText.value = dialogCaption;
  };

  const close = () => {
    isErrorOpen.value = false;
  };

  const accept = () => {
    close();
  };

  return {
    isErrorOpen,
    open,
    close,
    accept,
    errorText,
  };
};
