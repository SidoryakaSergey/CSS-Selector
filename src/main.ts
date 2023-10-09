import './style.scss';

import { addEvents, renderLevel } from './app/functions';
import { getStorageId } from './app/storage';

renderLevel(getStorageId());
addEvents();
