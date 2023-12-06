import { ImageSourcePropType } from 'react-native';
/*  */

interface Search {
 search: string;
}
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
/* roots stck params */
type RootStackParamList = {
 Category: undefined;
 Vocabulary: {
  idCategory: number;
  category: string;
 };
};

/* types form */
type typesForm = 'create' | 'edit';
type Item = { id: number; name: string; translation?: string };
/* types buttons */
type statusButton = 'default' | 'icon' | 'iconText';
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
 | 'create'
 | 'MicrophoneIcon'
 | 'EyeSlashIcon'
 | 'MagnifyingGlassIcon'
 | 'clock';
/*  */
type statusText = 'Primary' | 'Secundary' | 'Error';
/*  */
type statusAction = 'enable' | 'create' | 'eliminate' | 'edit' | 'cancel' | 'update';
/*  */
type statusDialog = 'success' | 'error';
export type {
 RootStackParamList,
 dialogSetting,
 ModalSetting,
 statusButton,
 statusIcon,
 typesForm,
 statusText,
 Community,
 Message,
 Search,
 Photo,
 Item,
};
