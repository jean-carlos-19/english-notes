import { AnyObjectSchema } from 'yup';
import { Photo, Message } from './type.common';
import { statusButton, statusIcon } from '@/constants';
import { ModelCategory, ModelVocabulary } from '@/models';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { Community, ModalSetting, dialogSetting, typesForm, Search, Item } from './type.common';

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
 text?: string;
 className?: string;
 handlerPress?: () => void;
}
interface IconProps {
 size: number;
 color: string;
 type: statusIcon;
 strokeWidth: number;
}
interface CustomDialogProps {
 setting: dialogSetting;
}
interface CustomListProps {
 title: string;
 isLoading: boolean;
 buttons: CustomButtonProps[];
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
 buttons: CustomButtonProps[];
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
 icon?: IconProps;
 type: statusButton;
 stylyText?: string;
 isDisable?: boolean;
 stylyButton?: string;
 stylyTextSecundary?: string;
 handlerPress?: () => void;
}
interface CustomInputProps {
 label: string;
 className: string;
 stylyText: string;
 background: string;
 styleLabel: string;
 isEditable: boolean;
 placeholder: string;
 value: string | number | undefined;
 handlerChange?: ((text: string) => void) | undefined;
 hanhandlerBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
}
interface CustomLoadingProps {
 size: number;
 color: string;
 message: Message;
 colorText: string;
 background: string;
 isActivate: boolean;
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
 IconProps,
};
