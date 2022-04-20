declare function getProductList(): Promise<any>;
declare function getProduct(productId: string): Promise<any>;

declare namespace ModelViewer_d {
  export {
  };
}

export { ModelViewer_d as ModelViewer, getProduct, getProductList };
