const SplitFactory = require('@splitsoftware/splitio').SplitFactory;

const factory = SplitFactory({
    core: {
        authorizationKey: 'ef3v59grs597u19fd605mvb8rdhnsb58av6p'
    }
});

const client = factory.client();

const calculateTreatment = (key) => {
    const treatment = client.getTreatment(key, 'albums_split');
    return treatment;
};

module.exports = {
    calculateTreatment
};
