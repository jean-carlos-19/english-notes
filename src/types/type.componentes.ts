import { AnyObjectSchema } from 'yup';
import { ModelCategory, ModelVocabulary } from '@/models';
import { Photo, Message, statusButton, statusIcon, statusText } from './type.common';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { Community, ModalSetting, dialogSetting, typesForm, Search, Item } from './type.common';

/*  */
interface CustomButtonIconProps {
 type: statusIcon;
 text?: string;
 className?: string;
 handlerPress?: () => void;
}
interface IconProps {
 icon: statusIcon;
}
interface CustomDialogProps {
 setting: dialogSetting;
}
interface CustomListProps {
 title: string;
 isLoading: boolean;
 icons: statusIcon[];
 searchForm?: CustomSearchFormProps;
 items: Item[];
 handlerEliminate?: (id: number, name: string) => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 goScreen?: (id: number, screen: string) => void;
 handlerItem?: () => void;
}
interface CustomItemProps {
 id: number;
 title: string;
 text?: string;
 icons: statusIcon[];
 handlerItem?: () => void;
 goScreen?: (id: number, screen: string) => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomLisVocabularytProps {
 title: string;
 text?: string;
 isLoading: boolean;
 buttons: CustomButtonProps[];
 searchForm: CustomSearchFormProps;
 list: ModelVocabulary[] | undefined;
 handlerItem?: () => void;
 handlerEdit?: (id: number, name: string) => void;
 handlerEnable?: (id: number, name: string) => void;
 handlerEliminate?: (id: number, name: string) => void;
}
interface CustomButtonProps {
 text?: string;
 textSecundary?: string;
 icon?: statusIcon;
 type: statusButton;
 stylyText?: string;
 isDisable?: boolean;
 stylyButton?: string;
 stylyTextSecundary?: string;
 handlerPress?: () => void;
}
interface CustomInputProps {
 label: string;
 isEditable: boolean;
 placeholder: string;
 value: string | number | undefined;
 handlerChange?: ((text: string) => void) | undefined;
 hanhandlerBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
interface CustomLoadingProps {
 message: Message;
}
interface CustomPhotoProps {
 image: Photo;
 className?: string;
}
interface CustomModalProps {
 setting: ModalSetting;
}

interface CustomSelectProps {
 id: string;
 label: string;
 stylyLabel: string;
 stylySelect: string;
 value: string | undefined;
 data: Community[] | undefined;
 handlerChange: (field: string, value: any, shouldValidate?: boolean | undefined) => void;
}
interface CustomCategoryFormProps {
 type: typesForm;
 isVisible: boolean;
 entity: ModelCategory;
 validationSchema: AnyObjectSchema;
 handlerGoBack?: () => void;
 handlerSubmit: (values: ModelCategory) => void;
}
interface CustomVocabularyFormProps {
 type: typesForm;
 isVisible: boolean;
 entity: ModelVocabulary;
 validationSchema: AnyObjectSchema;
 handlerGoBack?: () => void;
 handlerSubmit: (values: ModelVocabulary) => void;
}
interface CustomSearchFormProps {
 entity: Search;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: Search) => void;
}
interface CustomTextProps {
 variant: statusText;
 size: 'normal' | 'xl' | '2xl' | '3xl';
 text: string;
}
export type {
 CustomVocabularyFormProps,
 CustomLisVocabularytProps,
 CustomCategoryFormProps,
 CustomSearchFormProps,
 CustomButtonIconProps,
 CustomLoadingProps,
 CustomDialogProps,
 CustomSelectProps,
 CustomButtonProps,
 CustomInputProps,
 CustomModalProps,
 CustomPhotoProps,
 CustomListProps,
 CustomItemProps,
 CustomTextProps,
 IconProps,
};
