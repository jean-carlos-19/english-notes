import { useDebt } from '@/hooks';
import { CommunityItemProps } from '@/types';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { CustomButton } from './CustomButton';
import { typesAction, typesIconConst } from '@/constants';

const CommunityItem = (props: CommunityItemProps) => {
 const { title, id, button, handlerItem } = props;
 const { type, typeIcon, colorIcon, sizeIcon, stylyButton, handlerPress } = button;

 const navigation = useNavigation();
 const [isVisibled, setIsVisibled] = useState<boolean>(false);

 const { debts, searchDebts } = useDebt();

 useEffect(() => {
  if (isVisibled) searchDebts(title);
 }, [isVisibled]);

 const hundlerHiddeOrAppear = () => {
  setIsVisibled(!isVisibled);
 };

 return (
  <TouchableOpacity
   className={`p-4 ${isVisibled ? 'bg-slate-800' : 'bg-white'} rounded-xl mt-4 flex-col justify-start items-stretch `}
   onPress={hundlerHiddeOrAppear}
  >
   {/* header */}
   <View className="flex-row justify-stretch items-center space-x-4 ">
    <MapPinIcon size={25} color={isVisibled ? 'white' : 'rgb(156, 163, 175)'} />
    <Text className={`flex-1 text-xl  ${isVisibled ? 'text-slate-200 font-semibold' : ''}`}>{title}</Text>

    {/* Button eliminate */}
    {typeIcon === typesIconConst.elimited && (
     <View className="space-y-4">
      <CustomButton
       type={type}
       stylyButton={stylyButton}
       typeIcon={typesIconConst.create}
       colorIcon={colorIcon}
       sizeIcon={35}
       handlerPress={handlerPress}
      />
      {/* button create */}
      <View>
       <CustomButton
        type={type}
        stylyButton={stylyButton}
        typeIcon={typeIcon}
        colorIcon={colorIcon}
        sizeIcon={sizeIcon}
        handlerPress={() => handlerItem !== undefined && handlerItem(id, title, typesAction.eliminate)}
       />
      </View>
     </View>
    )}
    {/* Button enable */}
    {typeIcon === typesIconConst.disabled && (
     <CustomButton
      type={type}
      stylyButton={stylyButton}
      typeIcon={typeIcon}
      colorIcon={colorIcon}
      sizeIcon={sizeIcon}
      handlerPress={() => handlerItem !== undefined && handlerItem(id, title, typesAction.enable)}
     />
    )}
   </View>

   {/* show the information debts community */}
   {isVisibled && debts && debts?.length > 0 ? (
    <View className="space-y-8 mt-6">
     {debts?.map((debt, i) => (
      <View
       key={i}
       className="flex-col justify-stretch items-stretch space-y-8 border-2 p-2 rounded-xl border-slate-400"
      >
       <Text className={`flex-1 text-xl ${isVisibled ? 'text-slate-200' : 'text-slate-600'} `}>{debt.customer}</Text>
       <View className="flex-row justify-around items-center ">
        {/* button edit */}
        <View>
         <CustomButton
          type="iconText"
          typeIcon="edit"
          text="Editar"
          stylyButton="flex-col-reverse items-center"
          stylyText={`font-semibold text-slate-600 ${isVisibled ? 'text-slate-200' : ''}`}
          handlerPress={() => navigation.navigate('Debt', { id: debt.id, type: typesAction.edit })}
         />
        </View>
        {/* button view */}
        <View>
         <CustomButton
          type="iconText"
          typeIcon="eye"
          text="Visualizar"
          stylyButton="flex-col-reverse items-center"
          stylyText={`font-semibold text-slate-600 ${isVisibled ? 'text-slate-200' : ''}`}
          handlerPress={() => navigation.navigate('Profile', { id: debt.id, type: typesAction.edit })}
         />
        </View>
       </View>
      </View>
     ))}
    </View>
   ) : isVisibled && debts && debts?.length <= 0 ? (
    <Text className={`flex-1 text-xl ${isVisibled ? 'text-slate-200' : 'text-slate-600'} `}>No existen deudores</Text>
   ) : null}
  </TouchableOpacity>
 );
};
export { CommunityItem };
