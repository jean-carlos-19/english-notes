import { statusAction, statusButton, statusIcon } from '@/constants';
import { CommunityModel, CreditModel, DebtModel } from '@/models';
import { ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { statusDialog } from 'src/constants/modal.const';
import { AnyObjectSchema } from 'yup';
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
 handlerAppear: (id: number, name: string, type: statusAction) => void;
 handlerVerify: (status: boolean) => void;
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
 type: 'view' | 'eliminated' | 'default' | 'disabled' | 'hidde' | 'arrow-left' | 'refresh' | 'expand' | 'edit' | 'eye';
 className?: string;
 text?: string;
 handlerPress?: () => void;
}
interface DebtFormProps {
 type: statusAction;
 communities: Community[] | undefined;
 entity: DebtModel;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: DebtModel) => void;
}

interface CreditFormProps {
 type: statusAction;
 entity: CreditModel;
 validationSchema: AnyObjectSchema;
 handlerSubmit: (values: CreditModel) => void;
}
interface IconProps {
 type: statusIcon;
 color: string;
 size: number;
 strokeWidth:number;
}
interface CustomDialogProps {
 setting: dialogSetting;
}
interface CommunityListProps {
 button: CustomButtonProps;
 title: string;
 data: Community[] | undefined;
 handlerItem?: (id: number, name: string, type: statusAction) => void;
}
interface CommunityFormProps {
 entity: CommunityModel;
 handlerSubmit: (value: string) => void;
}
interface CustomButtonProps {
 type: statusButton;
 isDisable?: boolean;
 stylyButton?: string;
 stylyText?: string;
 text?: string;
 icon?:IconProps;
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
interface CommunityItemProps {
 id: number;
 title: string;
 button: CustomButtonProps;
 handlerItem?: (id: number, name: string, type: statusAction) => void;
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
/* roots params */
type RootStackParamList = {
 Home: undefined;
};
type RootButtonParamList = {
//  Home: undefined;
//  Product: undefined;
};
export {
 CustomButtonIconProps,
 RootButtonParamList,
 RootStackParamList,
 CustomLoadingProps,
 CustomDialogProps,
 CustomSelectProps,
 CommunityListProps,
 CustomButtonProps,
 CommunityItemProps,
 CommunityFormProps,
 CustomInputProps,
 CustomModalProps,
 CustomPhotoProps,
 CreditFormProps,
 dialogSetting,
 DebtFormProps,
 ModalSetting,
 IconProps,
 Community,
 Message,
};
