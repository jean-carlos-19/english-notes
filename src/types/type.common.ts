import { statusAction, statusDialog } from '@/constants';
import { ImageSourcePropType } from 'react-native';
/*  */

type typesForm = 'create' | 'edit';
type Item = { id: number; name: string; translation?: string };
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
export type {
 RootStackParamList,
 RootButtonParamList,
 ModalSetting,
 dialogSetting,
 typesForm,
 Community,
 Message,
 Search,
 Photo,
 Item,
};
