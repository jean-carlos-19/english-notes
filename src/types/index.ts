import { statusAction, statusButton, statusIcon, statusDialog } from '@/constants';
import { ModelCategory, ModelVocabulary } from '@/models';
import { ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { AnyObjectSchema } from 'yup';
/*  */

type typesForm = 'create' | 'edit';
/*  */

interface Message {
 title: string | undefined;
 text: string | undefined;
}
interface Photo {
 title: string;
 src: ImageSourcePropType;
 alt: string;
 size: number[];
}
interface Community {
 id: number;
 name: string;
}
interface dialogSetting {
 isActivate: boolean;
 content:
  | {
     message: Message;
     name: string;
    }
  | undefined;
 resetAll: () => void;
 handlerHidde: () => void;
 handlerAppear: (name: string, type: statusAction, message: string) => void;
 handlerVerify: (status: boolean) => boolean;
}
interface ModalSetting {
 name: string;
 isActivate: boolean;
 type: statusDialog;
 message: Message | undefined;
 handlerHidde: () => void;
 handlerAppear: () => void;
 handlerStatus: (message: Message, status: boolean, name: string) => void;
}

/*  */
interface CustomButtonIconProps {
 type:
  | 'view'
  | 'eliminated'
  | 'default'
  | 'disabled'
  | 'hidde'
  | 'arrow-left'
  | 'refresh'
  | 'expand'
  | 'edit'
  | 'eye';
 className?: string;
 text?: string;
 handlerPress?: () => void;
}
interface IconProps {
 type: statusIcon;
 color: string;
 size: number;
 strokeWidth: number;
}
interface CustomDialogProps {
 setting: dialogSetting;
}
interface CustomListProps {
 searchForm: {
  entity: ModelCategory;
  validationSchema: AnyObjectSchema;
  handlerSubmit: (values: ModelCategory) => void;
 };
 buttons: CustomButtonProps[];
 title: string;
 list: ModelCategory[] | undefined;
 goScreen?: (id: number, screen: string) => void;
 handlerItem?: () => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomItemProps {
 id: number;
 title: string;
 buttons: CustomButtonProps[];
 goScreen?: (id: number, screen: string) => void;
 handlerItem?: () => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomLisVocabularytProps {
 searchForm?: {
  entity: ModelVocabulary;
  validationSchema: AnyObjectSchema;
  handlerSubmit: (values: ModelVocabulary) => void;
 };
 buttons: CustomButtonProps[];
 title: string;
 list: ModelVocabulary[] | undefined;
 handlerItem?: () => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomButtonProps {
 type: statusButton;
 isDisable?: boolean;
 stylyButton?: string;
 stylyText?: string;
 text?: string;
 icon?: IconProps;
 handlerPress?: () => void;
}
interface CustomInputProps {
 className: string;
 background: string;
 stylyText: string;
 styleLabel: string;
 isEditable: boolean;
 placeholder: string;
 value: string | number | undefined;
 label: string;
 handlerChange?: ((text: string) => void) | undefined;
 hanhandlerBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
interface CustomLoadingProps {
 isActivate: boolean;
 colorText: string;
 message: Message;
 background: string;
 color: string;
 size: number;
}
interface CustomPhotoProps {
 image: Photo;
 className?: string;
}
interface CustomModalProps {
 setting: ModalSetting;
}

interface CustomSelectProps {
 stylyLabel: string;
 stylySelect: string;
 label: string;
 value: string | undefined;
 data: Community[] | undefined;
 id: string;
 handlerChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
interface CustomCategoryFormProps {
 isVisible: boolean;
 type: typesForm;
 entity: ModelCategory;
 validationSchema: AnyObjectSchema;
 handlerGoBack?: () => void;
 handlerSubmit: (values: ModelCategory) => void;
}
interface CustomVocabularyFormProps {
 isVisible: boolean;
 type: typesForm;
 entity: ModelVocabulary;
 validationSchema: AnyObjectSchema;
 handlerGoBack?: () => void;
 handlerSubmit: (values: ModelVocabulary) => void;
}
interface CustomSearchFormProps {
 entity: ModelCategory;
 validationSchema: AnyObjectSchema;
 handlerGoBack?: () => void;
 handlerSubmit: (values: ModelCategory) => void;
}
/* roots stck params */
type RootStackParamList = {
 Home: undefined;
 Category: undefined;
 Vocabulary: {
  idCategory: number;
  category: string;
 };
 Verbs: undefined;
 PhrasalVerbs: undefined;
 Idioms: undefined;
 Conversation: undefined;
};
type RootButtonParamList = {
 //  Home: undefined;
 //  Product: undefined;
};
export {
 CustomVocabularyFormProps,
 CustomLisVocabularytProps,
 CustomCategoryFormProps,
 CustomSearchFormProps,
 CustomButtonIconProps,
 RootButtonParamList,
 RootStackParamList,
 CustomLoadingProps,
 CustomDialogProps,
 CustomSelectProps,
 CustomListProps,
 CustomButtonProps,
 CustomItemProps,
 CustomInputProps,
 CustomModalProps,
 CustomPhotoProps,
 dialogSetting,
 ModalSetting,
 IconProps,
 Community,
 Message,
};
