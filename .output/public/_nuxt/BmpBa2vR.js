import{_ as u,c as a,a as t,n as d,D as p,F as m,q as g,d as h,t as n,p as x,o as i}from"./Bpht06DM.js";const f={data(){return{selectAll:!1,currentPage:1,perPage:5,products:[],mockData:[{pname:"Pentel ดินสอกด เก็บหัวได้ เพนเทล ด้ามโลหะ 0.5mm SS465",p_id:"P5223643",brand:"Pentel",p_type:"เครื่องเขียน",stock:"20",Description:"มาในด้ามสวยหรู ดีไซน์สวย ทันสมัย จับถนัดมือ ด้ามสแตนเลส คุณภาพสูง ",image:"https://inwfile.com/s-fz/bukw42.jpg",checked:!1},{pname:"Pentel ดินสอกด เก็บหัวได้ เพนเทล ด้ามโลหะ 0.5mm SS465",p_id:"P5223643",brand:"Pentel",p_type:"เครื่องเขียน",stock:"20",Description:"มาในด้ามสวยหรู ดีไซน์สวย ทันสมัย จับถนัดมือ ด้ามสแตนเลส คุณภาพสูง ",image:"https://inwfile.com/s-fz/bukw42.jpg",checked:!1}],useApiData:!1}},watch:{products:{handler(l){this.selectAll=l.every(e=>e.checked)},deep:!0}},computed:{paginatedProduct(){const l=(this.currentPage-1)*this.perPage,e=this.currentPage*this.perPage;return console.log(`Start: ${l}, End: ${e}, Total: ${this.products.length}`),this.products.slice(l,e)},totalPages(){return Math.ceil(this.products.length/this.perPage)},startIndex(){return(this.currentPage-1)*this.perPage},endIndex(){return Math.min(this.startIndex+this.perPage,this.products.length)},pages(){return Array.from({length:this.totalPages},(l,e)=>e+1)}},methods:{async fetchPeopleFromApi(){try{const l=await this.$axios.get("/api/products");this.products=l.data}catch(l){console.error("Failed to fetch data from API",l)}},goToPage(l){l>=1&&l<=this.totalPages&&(this.currentPage=l)},navigateToPage(){this.$router.push("/admin/addproduct")},navigateToDetail(l){this.$router.push(`/admin/productdetail/${l.p_id}`)},toggleAll(){this.products.forEach(l=>{l.checked=this.selectAll})}},async created(){this.useApiData?await this.fetchPeopleFromApi():this.products=this.mockData}},P={class:"container max-w-full w-full p-0 lg:p-5"},y={class:"mt-5 bg-gray-300 p-5 rounded-xl"},v={class:"min-w-full divide-y divide-gray-300"},w={class:""},b={scope:"col",class:"text-sm font-semibold text-gray-900 sm:pl-0"},k={class:"divide-y divide-gray-300 bg-white"},_=["onClick"],A={class:"text-center w-10"},D=["onUpdate:modelValue"],C={class:"py-2 px-5 w-28"},T=["src"],L={class:""},S={class:"flex justify-between items-center mt-4 bg-white p-3"},V=["value"],j={class:"flex items-center"},I=["disabled"],B=["disabled"];function F(l,e,M,U,o,r){return i(),a("div",P,[e[13]||(e[13]=t("div",{class:"sm:flex sm:items-center sm:justify-between"},[t("div",{class:"sm:flex-auto"},[t("h1",{class:"text-3xl font-semibold text-gray-900"},"Product"),t("p",{class:"mt-2 text-sm text-gray-700"})])],-1)),t("div",y,[t("table",v,[t("thead",null,[t("tr",w,[t("th",b,[d(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=s=>o.selectAll=s),onChange:e[1]||(e[1]=(...s)=>r.toggleAll&&r.toggleAll(...s)),class:"cursor-pointer h-4 w-4"},null,544),[[p,o.selectAll]])]),e[6]||(e[6]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"},null,-1)),e[7]||(e[7]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"}," ชื่อสินค้า ",-1)),e[8]||(e[8]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"}," รหัสสินค้า ",-1)),e[9]||(e[9]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"}," ประเภทสินค้า ",-1)),e[10]||(e[10]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"}," จำนวนสินค้า ",-1)),e[11]||(e[11]=t("th",{scope:"col",class:"px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:pl-0"},null,-1))])]),t("tbody",k,[(i(!0),a(m,null,g(r.paginatedProduct,s=>(i(),a("tr",{key:s.p_id,onClick:c=>r.navigateToDetail(s),class:"cursor-pointer hover:bg-gray-100"},[t("td",A,[d(t("input",{type:"checkbox","onUpdate:modelValue":c=>s.checked=c,class:"cursor-pointer h-4 w-4"},null,8,D),[[p,s.checked]])]),t("td",C,[t("img",{src:s.image,class:"w-16 border"},null,8,T)]),t("td",L,n(s.pname),1),t("td",null,n(s.p_id),1),t("td",null,n(s.p_type),1),t("td",null,n(s.stock),1),e[12]||(e[12]=t("td",{class:"flex relative whitespace-nowrap py-5 text-sm font-medium sm:pr-0"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6 mr-2"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"})]),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"size-6 text-red-500"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})])],-1))],8,_))),128))])])]),t("div",S,[t("div",null,[h(" รายการที่ "+n(r.startIndex+1)+" ถึง "+n(r.endIndex)+" จากทั้งหมด "+n(o.products.length)+" รายการ ",1),d(t("select",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.perPage=s),onChange:e[3]||(e[3]=s=>o.currentPage=1)},[(i(),a(m,null,g([5,10,15,20],s=>t("option",{key:s,value:s},n(s)+" รายการต่อหน้า ",9,V)),64))],544),[[x,o.perPage]])]),t("div",j,[t("button",{onClick:e[4]||(e[4]=s=>r.goToPage(o.currentPage-1)),disabled:o.currentPage===1,class:"btn mx-1"}," < ",8,I),t("span",null,"Page "+n(o.currentPage)+" of "+n(r.totalPages),1),t("button",{onClick:e[5]||(e[5]=s=>r.goToPage(o.currentPage+1)),disabled:o.currentPage===r.totalPages,class:"btn mx-1"}," > ",8,B)])])])}const H=u(f,[["render",F]]);export{H as default};
