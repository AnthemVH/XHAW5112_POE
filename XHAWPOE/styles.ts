import { StyleSheet, TextStyle } from 'react-native';

const themeColors = {
  primary: '#4CAF50',
  secondary: '#FF5722',
  background: '#F5F5F5',
  cardBackground: '#FFFFFF',
  textPrimary: '#212121',
  textSecondary: '#757575',
  accent: '#FFC107',
};

const themeFonts = {
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: themeColors.textPrimary,
  },
  text: {
    fontSize: 16,
    color: themeColors.textPrimary,
  },
  label: {
    fontSize: 14,
    fontWeight: '600' as TextStyle['fontWeight'],
    color: themeColors.textSecondary,
  },
};
const contactStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: themeColors.background,
  },
  contactInfo: {
    marginVertical: 20,
  },
  mapContainer: {
    height: 300,
    marginVertical: 20,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  courseSelection: {
    marginVertical: 15,
  },
  button: {
    backgroundColor: themeColors.primary,
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: themeColors.background,
  },
  card: {
    backgroundColor: themeColors.cardBackground,
    borderRadius: 12,
    padding: 16,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 4,
  },
  button: {
    backgroundColor: themeColors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    borderRadius: 12,
    backgroundColor: themeColors.cardBackground,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
});

export { themeFonts, globalStyles ,contactStyles};
