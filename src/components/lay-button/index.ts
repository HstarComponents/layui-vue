import Button from './lay-button.vue';
import ButtonContainer from './lay-button-container.vue';
import ButtonGroup from './lay-button-group.vue';
import { withInstall } from '../_utils/componentUtil';

import './index.less';

export const LayButton = withInstall(Button);
export const LayButtonGroup = withInstall(ButtonGroup);
export const LayButtonContainer = withInstall(ButtonContainer);
