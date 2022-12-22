export const mockGetItem = jest.fn();
export const mockSetItem = jest.fn();
export const mockRemoveItem = jest.fn();

export const mockLocalStorage = {
  getItem: mockGetItem,
  setItem: mockSetItem,
  removeItem: mockRemoveItem,
};

mockGetItem.mockReturnValue('[]');
mockSetItem.mockReturnValue(undefined);
mockRemoveItem.mockReturnValue(undefined);
