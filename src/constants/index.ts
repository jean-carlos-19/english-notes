import { Message } from '@/types';

/*  */
const messageRefresh = Object.freeze<Message>({
 title: 'Message loading',
 text: 'please wait ...',
});
/* types form */
type statusForm = 'create' | 'edit';
const typesForm = Object.freeze({
 create: 'create',
 edit: 'edit',
});
/* types buttons */
type statusButton = 'default' | 'icon' | 'iconText';
const typesButtonConst = Object.freeze({
 default: 'default',
 icon: 'icon',
 iconText: 'iconText',
});
/* types icons */
type statusIcon =
 | 'view'
 | 'eliminated'
 | 'default'
 | 'enable'
 | 'hidde'
 | 'arrow-left'
 | 'refresh'
 | 'expand'
 | 'edit'
 | 'eye'
 | 'create';
const typesIconConst = Object.freeze({
 view: 'view',
 elimited: 'eliminated',
 default: 'default',
 enable: 'enable',
 hidde: 'hidde',
 arrowLeft: 'arrow-left',
 refresh: 'refresh',
 expand: 'expand',
 edit: 'edit',
 eye: 'eye',
 create: 'create',
});
/*  */
type statusAction = 'enable' | 'create' | 'eliminate' | 'edit' | 'cancel' | 'update';
const typesAction = Object.freeze({
 enable: 'enable',
 create: 'create',
 eliminate: 'eliminate',
 edit: 'edit',
 update: 'update',
 cancel: 'cancel',
});

/*  */
type statusDialog = 'success' | 'error';
const typesStatusDialog = Object.freeze({
 success: 'success',
 error: 'error',
});

export { messageSuccessCategory, messageCategoryDialog } from './message.successful.const';
export { images } from './images.const';

export {
 typesForm,
 typesAction,
 typesIconConst,
 messageRefresh,
 typesButtonConst,
 typesStatusDialog,
 statusForm,
 statusIcon,
 statusDialog,
 statusAction,
 statusButton,
};
