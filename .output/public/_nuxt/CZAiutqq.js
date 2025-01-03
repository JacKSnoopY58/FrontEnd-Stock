import{a as i}from"./upsvKRUO.js";import{_ as h,c as d,a as r,n as y,v as b,p as m,F as p,q as a,o as c,t as l}from"./Bpht06DM.js";const f={data(){return{products:[],productType:[],currentPage:0,totalPages:1,isLoading:!1,filters:{page:0,perpage:10,isuse:!0,max:"desc",search:"",stock:null,productType:0}}},methods:{goToProductDetail(o){console.log("Product ID:",o),this.$router.push(`/admin/${o}`)},async fetchProducts(){try{const o=await i.post("https://project-stock.onrender.com/api/products/products",this.filters);this.products=o.data.data}catch(o){console.error("Error fetching products:",o),this.products=[]}},async fetchProductTypes(){try{const o=await i.get("https://project-stock.onrender.com/api/products/get/producttype");this.productType=o.data.data}catch(o){console.error("Error fetching products:",o.response?o.response.data:o.message),this.products=[]}},getTypeName(o){const t=this.productType.find(u=>u.id===o);return t?t.typeName:"Unknown Type"}},mounted(){this.fetchProducts(),this.fetchProductTypes()}},P={class:"mb-4 flex space-x-4"},x=["value"],k={class:"min-w-full border-collapse border border-gray-200"},T={key:0},v=["onClick"],_={class:"border border-gray-200 px-4 py-2"},N=["src","alt"],w={class:"border border-gray-200 px-4 py-2"},C={class:"border border-gray-200 px-4 py-2"},S={class:"border border-gray-200 px-4 py-2"},D={class:"mt-4 flex space-x-2"},E=["disabled"],F=["onClick"],I=["disabled"];function L(o,t,u,U,s,n){return c(),d("div",null,[t[9]||(t[9]=r("h1",{class:"text-3xl font-semibold mb-4"},"Product List",-1)),r("div",P,[y(r("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.filters.search=e),type:"text",placeholder:"Search",class:"border p-2 rounded",onInput:t[1]||(t[1]=(...e)=>n.fetchProducts&&n.fetchProducts(...e))},null,544),[[b,s.filters.search]]),y(r("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>s.filters.productType=e),class:"border p-2 rounded",onChange:t[3]||(t[3]=(...e)=>n.fetchProducts&&n.fetchProducts(...e))},[t[6]||(t[6]=r("option",{value:""},"All Types",-1)),(c(!0),d(p,null,a(s.productType,e=>(c(),d("option",{key:e.id,value:e.id},l(e.typeName),9,x))),128))],544),[[m,s.filters.productType]])]),r("table",k,[t[8]||(t[8]=r("thead",null,[r("tr",null,[r("th",{class:"border border-gray-200 px-4 py-2"},"#"),r("th",{class:"border border-gray-200 px-4 py-2"},"Product Name"),r("th",{class:"border border-gray-200 px-4 py-2"},"Stock"),r("th",{class:"border border-gray-200 px-4 py-2"},"Type")])],-1)),r("tbody",null,[s.products.length===0?(c(),d("tr",T,t[7]||(t[7]=[r("td",{colspan:"4",class:"text-center"},"No products found.",-1)]))):(c(!0),d(p,{key:1},a(s.products,e=>(c(),d("tr",{key:e.productId,onClick:g=>n.goToProductDetail(e.productId),class:"hover:bg-slate-400"},[r("td",_,[r("img",{src:e.productPicture?"https://project-stock.onrender.com/images/"+e.productPicture:"https://lh3.googleusercontent.com/proxy/vfrcI3Ho8V8lLS1FWlXFKUAc9p85CQm9WxsUFwOm1zrLrYsStycX5NSOBJS4TYEEX5_3mQkd8QuqnIk",alt:e.productPicture?"Product Picture":"Default Picture",class:"w-16 h-16 object-cover"},null,8,N)]),r("td",w,l(e.productName),1),r("td",C,l(e.productTotal),1),r("td",S,l(n.getTypeName(e.productType)),1)],8,v))),128))])]),r("div",D,[r("button",{onClick:t[4]||(t[4]=e=>o.changePage(s.currentPage-1)),disabled:s.currentPage===0,class:"px-4 py-2 bg-gray-300 text-black rounded"}," Previous ",8,E),(c(!0),d(p,null,a(s.totalPages,e=>(c(),d("button",{key:e,onClick:g=>o.changePage(e-1),class:"px-4 py-2 bg-blue-500 text-white rounded"},l(e),9,F))),128)),r("button",{onClick:t[5]||(t[5]=e=>o.changePage(s.currentPage+1)),disabled:s.currentPage+1>=s.totalPages,class:"px-4 py-2 bg-gray-300 text-black rounded"}," Next ",8,I)])])}const V=h(f,[["render",L]]);export{V as default};
