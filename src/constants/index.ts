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

const typesText = Object.freeze({
 primary: 'Primary',
 seccundary: 'Secundary',
 error: 'Error',
});

const typesSizeTextStyle = Object.freeze({
 'xl': 'xl',
 '2xl': '2xl',
 '3xl': '3xl',
 'normal': 'normal',
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
 document: 'document',
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

const types = Object.freeze({
 styleText: typesSizeTextStyle,
 dialog: typesStatusDialog,
 action: typesAction,
 button: typesButton,
 icon: typesIcon,
 text: typesText,
 form: typesForm,
});
export { images } from './images';

export {
 messageSuccessCategory,
 messageCategoryDialog,
 messageSuccessVocabulary,
 messageVocabularyDialog,
} from './message';

export { data, types, messageRefresh };
