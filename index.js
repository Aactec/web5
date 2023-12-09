const hack = Web5.Web5;
const { web5, did: hackDid } = await hack.connect({
});
console.log(hackDid);

const didDocument = await web5.did.resolve(hackDid);
console.log(didDocument);

const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
        dataFormat: 'text/plain',
    },
});
console.log('writeResult', record);

const readResult = await record.data.text();
console.log('readResult', readResult);

const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
});
console.log('updateResult', await record.data.text());

// const deleteResult = await record.delete();
// console.log('deleteResult', deleteResult);