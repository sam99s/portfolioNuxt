const rules = {
    required: (value) => !!value || 'Required field',
    maxLength: (value, limit) => {
        if(value != null) return `${value}`.length <= limit || `Maximum ${limit} characters`;
        return true
    },
    email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Wrong email format'
    }
};

export default rules;