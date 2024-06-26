import { ref } from 'vue';
const isOpen = ref(false);
const text = ref('');
let acceptCallback:(() => unknown) | null=null
export const useConfirmationDialog = () => {
  const open = (callback: () => unknown, dialogCaption:string ) => {
    isOpen.value = true;
    text.value = dialogCaption;
    acceptCallback = callback;
  };

  const close = () => {
    isOpen.value = false;
  };

  const accept = () => {
    close();
    acceptCallback?.();
  };

  return {
    isOpen,
    open,
    close,
    accept,
    text,
  };
};
