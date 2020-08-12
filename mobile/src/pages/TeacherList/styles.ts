import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F7',
  },
  teacherList: {
    marginTop: -60,
  },
  searchForm: {
    marginBottom: 48,
  },
  label: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
  },
  input: {
    height: 54,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  submitButton: {
    backgroundColor: '#04D361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default styles;
