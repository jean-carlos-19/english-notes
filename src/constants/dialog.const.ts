import { Message } from '@/types';

const dialogCancelDebtConst = Object.freeze<Message>({
 title: 'Mensaje de pago de deuda',
 text: '¿Estas seguro de finalizar la deuda del cliente? ',
});
const DialogUpdateDebtConst = Object.freeze<Message>({
 title: 'Mensaje de actualizacion de deuda',
 text: '¿Estas seguro de modificar la informacion de la deuda del cliente? ',
});
const dialogElimitedCommunityConst = Object.freeze<Message>({
 title: 'Mensaje de elimiacion',
 text: '¿Estas seguro de eliminar la comunidad? ',
});
const dialogEnableCommunityConst = Object.freeze<Message>({
 title: 'Mensaje de habilitacion ',
 text: '¿Estas seguro de habilitar nuevamente la comunidad? ',
});
export { DialogUpdateDebtConst, dialogCancelDebtConst, dialogElimitedCommunityConst, dialogEnableCommunityConst };
