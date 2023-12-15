import { typesSizeTextStyle, typesText } from './text';
import { typesStatusDialog } from './dialog';
import { typesAction } from './action';
import { typesButton } from './button';
import { typesIcon } from './icon';
import { typesForm } from './form';
import { Message } from '@/types';
import data from './data.json';

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

export { data, types };
