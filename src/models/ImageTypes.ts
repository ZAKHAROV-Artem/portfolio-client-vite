export interface IImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: null;
      caption: null;
      width: number;
      height: number;
      formats: null;
      hash: string;
      ext: string;
      mime: string;
      size: 1.04;
      url: string;
      previewUrl: null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  path: string;
  size: number;
  url: string;
}
export interface IImages {
  id: number;
  attributes: {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
    formats: {
      thumbnail: IImageFormat;
      large: IImageFormat;
      medium: IImageFormat;
      small: IImageFormat;
    };
  };
}
