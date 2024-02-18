import { ProductType } from "@/shared/types";
let storeItems:ProductType[] = [];

function setStoreItems(items: any) {
  storeItems = items;
}

export {  storeItems, setStoreItems };

