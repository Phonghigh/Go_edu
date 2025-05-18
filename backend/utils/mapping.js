// Mapping dữ liệu từ excel lên db
const fieldMapping = {
    'sbd': 'registrationNumber',
    'toan': 'scores.math',
    'ngu_van': 'scores.literature',
    'ngoai_ngu': 'scores.english',
    'vat_li': 'scores.physics',
    'hoa_hoc': 'scores.chemistry',
    'sinh_hoc': 'scores.biology',
    'lich_su': 'scores.history',
    'dia_li': 'scores.geography',
    'gdcd': 'scores.gdcd',
    'ma_ngoai_ngu': 'code_english',
};

export default fieldMapping;
