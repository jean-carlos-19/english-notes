import { CommunityService } from '@/services';
import { ResultSet } from 'expo-sqlite';
import { object, string } from 'yup';
const service: CommunityService = CommunityService.getService();

const CommunityValidation = object({
 name: string()
  .required('Ingrese un nombre de la comunidad')
  .test('', 'Esta comunidad ya existe', async (value: string) => {
   const rs = await service.searchCommunity(value);
   if (rs === undefined) return false;
   return (rs as ResultSet[])[0].rows.length > 0 ? false : true;
  }),
});

const DebtValidation = object({
 community: string()
  .required('Ingrese un nombre de la comunidad')
  .test('', 'Esta comunidad no existe', async (value: string) => {
   const rs = await service.searchCommunity(value);
   if (rs === undefined) return false;
   return (rs as ResultSet[])[0].rows.length === 0 ? false : true;
  }),
 customer: string().required('Ingrese un nombre del cliente'),
 description: string().required('Ingrese una descripcion'),
 value: string()
  .required('Ingrese el valor de la deuda')
  .matches(/^\d+(\.\d+)?/, 'Ingrese un valor numerico'),
});

const CreditValidation = object({
 credit: string()
  .required('Ingrese un nombre de la comunidad')
  .matches(/^\d+(\.\d+)?/, 'Ingrese un valor numerico'),
});

export { CommunityValidation, DebtValidation, CreditValidation };
