import { Message } from '@/types';
import data from './data.json';

/*  */
const messageRefresh = Object.freeze<Message>({
 title: 'Message loading',
 text: 'please wait ...',
});

const typesForm = Object.freeze({
 create: 'create',
 edit: 'edit',
});

const typesButton = Object.freeze({
 default: 'default',
 icon: 'icon',
 iconText: 'iconText',
});

const typesIcon = Object.freeze({
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
 MicrophoneIcon: 'MicrophoneIcon',
 EyeSlashIcon: 'EyeSlashIcon',
 MagnifyingGlassIcon: 'MagnifyingGlassIcon',
 clock: 'clock',
});
/*  */

const typesAction = Object.freeze({
 enable: 'enable',
 create: 'create',
 eliminate: 'eliminate',
 edit: 'edit',
 update: 'update',
 cancel: 'cancel',
});

const typesStatusDialog = Object.freeze({
 success: 'success',
 error: 'error',
});

export {
 messageSuccessCategory,
 messageCategoryDialog,
 messageSuccessVocabulary,
 messageVocabularyDialog,
} from './message';
export { images } from './images';

export { typesIcon, typesForm, typesButton, typesAction, messageRefresh, typesStatusDialog, data };
