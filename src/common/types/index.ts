export interface ProductImage {
  id: number;
  product_id: number;
  position: number;
  created_at: string;
  updated_at: string;
  src: string;
  width: number;
  height: number;
  alt: string | null;
  variant_ids: number[];
}

export interface ProductOption {
  id: number;
  product_id: number;
  name: string;
  position: number;
  values: string[];
}

export interface ProductVariant {
  id: number;
  product_id: number;
  title: string;
  price: string;
  compare_at_price: string | null;
  sku: string;
  position: number;
  inventory_policy: string;
  fulfillment_service: string;
  inventory_management: string | null;
  option1: string | null;
  option2: string | null;
  option3: string | null;
  taxable: boolean;
  barcode: string | null;
  grams: number;
  weight: number;
  weight_unit: string;
  requires_shipping: boolean;
  available: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProductType {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: ProductVariant[];
  images: ProductImage[];
  options: ProductOption[];
}

export interface ProductResponse {
  products: ProductType[];
}
