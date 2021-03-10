import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default () => {
    library.add(faChevronDown);
    library.add(faCheck);

    Vue.component('fa-icon', FontAwesomeIcon);
};
