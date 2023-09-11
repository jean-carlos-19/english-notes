import { imgWarning, imgSuccess, imgEmpty } from '@/assets';
import { Message } from '@/types';
/* list images */
const imagesConst = Object.freeze({
 warning: {
  title: '',
  alt: '',
  src: imgWarning,
  size: [150, 150],
 },
 success: {
  title: '',
  alt: '',
  src: imgSuccess,
  size: [150, 150],
 },
 empty: {
  title: '',
  alt: '',
  src: imgEmpty,
  size: [500, 500],
 },
});
/* data form to create new community */
const CommunityFormConst = Object.freeze({
 title: 'Crea una comunidad',
 label: 'Comunidad *',
 placeholder: 'Ej: Las lagunas',
 button: 'Guardar comunidad',
});
/* list enable community */
const ListCommunityConst = Object.freeze({
 title: 'Lista de las comunidades activas',
});
/* list eliminate community */
const ListCommunityDeleteConst = Object.freeze({
 title: 'Lista de las comunidades eliminadas',
});
/* data */
const debtFormConst = Object.freeze({
 title: '',
 community: {
  label: 'Comunidad',
  placeholder: 'Ej: Las lagunas',
 },
 customer: {
  label: 'Cliente',
  placeholder: 'Ej: Jean',
 },
 description: {
  label: 'Description',
  placeholder: 'Ej: jarabe de tutuma',
 },
 value: {
  label: 'Valor',
  placeholder: 'Ej: $5',
 },
});

const mocalAddCommunityConst = Object.freeze<Message>({
 title: 'Creacion de comunidad',
 text: 'Se ha creado la comunidad: ',
});

const messageRefreshConst = Object.freeze<Message>({
 title: 'Refrescando la informacion',
 text: 'Por favor espere mientras obtnenemos los ultimos datos',
});
/* types buttons */
const typesButtonConst = Object.freeze({
 default: 'default',
 icon: 'icon',
 iconText: 'iconText',
});
type statusButton = 'default' | 'icon' | 'iconText';
/* types icons */
const typesIconConst = Object.freeze({
 view: 'view',
 elimited: 'eliminated',
 default: 'default',
 disabled: 'disabled',
 hidde: 'hidde',
 arrowLeft: 'arrow-left',
 refresh: 'refresh',
 expand: 'expand',
 edit: 'edit',
 eye: 'eye',
 create: 'create',
});
type statusIcon =
 | 'view'
 | 'eliminated'
 | 'default'
 | 'disabled'
 | 'hidde'
 | 'arrow-left'
 | 'refresh'
 | 'expand'
 | 'edit'
 | 'eye'
 | 'create';
const typesAction = Object.freeze({
 enable: 'enable',
 create: 'create',
 eliminate: 'eliminate',
 edit: 'edit',
 update: 'update',
 cancel: 'cancel',
});

type statusAction = 'enable' | 'create' | 'eliminate' | 'edit' | 'cancel' | 'update';
const Root = Object.freeze({
 Home: 'Inicio',
 Profile: 'Perfil',
 Debt: 'Deduor',
 community: 'Comunidad',
 HomeTabs: 'Inicio Tab',
 Product: 'Producto',
});

export {
 DialogUpdateDebtConst,
 dialogCancelDebtConst,
 dialogElimitedCommunityConst,
 dialogEnableCommunityConst,
} from './dialog.const';
export {
 modalAddDebtConst,
 typesStatusDialog,
 ModalCommunityConst,
 ModalUpdateDebtConst,
 modalCancelDebtConst,
 modalDeleteCommunityConst,
 modalEnableCommunityConst,
 ModalUpdateCreditDebtConst,
} from './modal.const';
export {
 ListCommunityDeleteConst,
 mocalAddCommunityConst,
 messageRefreshConst,
 CommunityFormConst,
 ListCommunityConst,
 typesButtonConst,
 typesIconConst,
 debtFormConst,
 imagesConst,
 statusAction,
 statusButton,
 typesAction,
 statusIcon,
 Root,
};
