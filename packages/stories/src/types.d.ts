interface IStoryObject {
  type: string;
  url: string;
  duration: number;
  component?: any;
}

interface IStoryIndexedObject extends IStoryObject {
  index: number;
}

export interface IStoryProps {
  stories: IStoryObject[];
  height?: '100%';
  width?: '100%';
  onStoryChange: (currentIndex: number) => void;
  currentIndex?: number;
  defaultDuration?: number;
}

export interface IStoryContext {
  stories: IStoryIndexedObject[];
  height?: '100%';
  width?: '100%';
  defaultDuration: number;
}
