import moment from 'moment';

export default {
    filters: {
        formatDate(outputFormat) {
            return moment(outputFormat).calendar();
        },
        diffForHumans(str) {
            return moment(str).fromNow();
        }
    }
}