import { Item } from '@/types';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

const usePdf = () => {
 const html = (items: Item[], name: string) => `
        <html>
        <head>
            <style>
            @page {
                margin: 20px;
            }
            .container{
                display: flex;
                flex-direction: column;
                justify-items: flex-start;
                align-self: center;
            }
            .title{
                color: #334155;
                font-size: 24px; 
                font-weight: bold;
                text-align:center;
                font-family: Helvetica Neue; 
            }
            .list{
                list-style: none;
                display: grid;
                grid-template-columns: repeat(2, 1fr); /* Tres columnas de igual tamaño */
                grid-gap: 8px; /* Espacio entre las celdas del grid */
            }
            .item {
                padding: 8px 8px 8px 0;
                border-radius: 8px;
                font-family: Helvetica Neue; 
                font-size: 16px; 
                color: #334155;
                background-color: #e2e8f0;
            }
    
            .number{
                margin-right:8px;
                padding: 8px;
                border-radius: 8px;
                font-family: Helvetica Neue; 
                font-size: 16px; 
                font-weight: bold;
                color: #f1f5f9;
                background-color: #0891b2;
            }
            .link{
                margin-top:16px;
                font-family: Helvetica Neue; 
                font-size: 16px; 
                color: #334155;
                text-decoration:none;
                text-align:center;
            }
            </style>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        <body class="container">
            <h1 class="title" >
            ${name}
            </h1>
            <div class="list">
                ${items
                 .map(
                  (item: Item, i) =>
                   `<p class="item"> <span class="number"> ${
                    i + 1
                   } </span> ${item.name.toLocaleLowerCase()} ${
                    item?.translation ? `- ${item.translation}` : ''
                   }  </p>`,
                 )
                 .join('')}
            </div>
            <a class="link" href="https:/piguavesof.com">by @piguavesof</a>
        </body>
        </html>
    `;
 const handlerGeneratePdfCategory = async (items: Item[], name: string) => {
  const file = await printToFileAsync({
   html: html(items, name),
   base64: false,
  });
  await shareAsync(file.uri, { UTI: '.pdf', mimeType: 'application/pdf' });
 };
 return { handlerGeneratePdfCategory };
};

export { usePdf };
