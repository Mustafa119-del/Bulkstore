import { StoreInfo } from '../types';

export const STORE_INFO: StoreInfo = {
  name: 'Bulk Store',
  phone: '+20 15 09907801',
  phoneRaw: '201509907801',
  whatsappLink: 'https://wa.me/201509907801',
  addressAr: '51 شارع محمد الخلفاوي، شريف، الساحل، محافظة القاهرة',
  addressEn: '51 Mohamed El-Khalafawy St, Sherif, Sahel, Cairo Governorate',
  googleMapsUrl: 'https://maps.app.goo.gl/oNRVWSCZBfXB1qmG8',
  facebookUrl: 'https://www.facebook.com/share/18GmqbDsgj/',
  workingHoursAr: 'يومياً من 2:00 ظهراً حتى 12:00 منتصف الليل',
  workingHoursEn: 'Daily from 2:00 PM to 12:00 Midnight',
  deliveryNoteAr: 'التوصيل متاح إلى جميع مناطق القاهرة',
  deliveryNoteEn: 'Delivery available to all areas across Cairo'
};

export const getWhatsAppMessageUrl = (productName?: string, customText?: string) => {
  let message = 'مرحباً Bulk Store 👋 أريد الاستفسار عن المكملات الغذائية لديكم.';
  if (productName) {
    message = `مرحباً Bulk Store 👋 أريد الاستفسار عن توفر وسعر منتج: (${productName}). هل متاح في المحل أو للتوصيل داخل القاهرة؟`;
  } else if (customText) {
    message = customText;
  }
  return `https://wa.me/201509907801?text=${encodeURIComponent(message)}`;
};
