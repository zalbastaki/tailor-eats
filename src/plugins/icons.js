import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faChevronDown,
    faCheck,
    faEnvelope,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faChevronDown);
    library.add(faCheck);
    library.add(faEnvelope);
    library.add(faPhone);

    Vue.component('fa-icon', FontAwesomeIcon);
};
