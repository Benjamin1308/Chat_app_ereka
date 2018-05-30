export const mockDataChatMessage = [
  {
    id: '1',
    name: 'Tuấn Anh',
    body: 'bạn ơi',
    time: '2s trước',
    status: 'MSG_PENDING',
  },
  {
    id: '2',
    name: 'Hồ Ngọc Hà',
    body: 'không phải vậy đâu bạn ơi',
    time: '2s trước',
    status: 'MSG_PENDING',
  },
  {
    id: '3',
    name: 'Mai Anh',
    body: 'đoạn chat bên kia đã nhận được',
    time: '15ph trước',
    status: 'MSG_SENT',
  },
  {
    id: '4',
    name: 'Thùy Dung',
    body: 'đoạn chat bên kia đã nhận và đã xem',
    time: '5h trước',
    status: 'MSG_SEEN',
  },
  {
    id: '5',
    name: 'Chi Dân',
    body: 'đoạn chat lỗi gửi không tới',
    time: '2 ngày trước',
    status: 'MSG_ERROR',
  },
];

export const mockDataChatRequest = [
  {
    id: '1',
    userId: '2',
    name: 'Thùy Dung',
    requestTime: '5h trước',
    requestMessage: '',
  },
  {
    id: '2',
    userId: '1',
    name: 'Lê Bảo Hân',
    requestTime: '5h trước',
    requestMessage:
      'Đây là thông điệp lúc request chat mà user Lê Bảo Hân đã nhập gửi tới người dùng.',
  },
];

export const mockDataBlock = [
  {
    id: '1',
    name: 'Đức Trí',
    from: '27/03 2018',
  },
  {
    id: '2',
    name: 'Hồ Ngọc Hà',
    from: '27/03 2018',
  },
  {
    id: '3',
    name: 'Hồ Quỳnh Hương',
    from: '27/03 2018',
  },
  {
    id: '4',
    name: 'Lê Hoàng',
    from: '27/03 2018',
  },
];

export const mockDataUser = [
  {
    id: '1',
    name: 'Lê Bảo Hân',
    follower: '27',
    following: '198',
    description: 'Chuyên gia sử học',
  },
  {
    id: '2',
    name: 'Thùy Dung',
    follower: '25',
    following: '113',
    description: 'Chuyên gia tâm lý tuổi teen',
  },
];

export const mockDataMessage = [
  {
    id: '1',
    type: 'receive',
    message:
      'Bạn hoàn toàn có thể rửa mặt bằng nước muối 0.5%. Nếu có thể, bạn làm ấm một chút bằng lò vi sóng thì sẽ còn tốt hơn nữa.',
    time: '09:14 am',
  },
  {
    id: '2',
    type: 'receive',
    message:
      'Khi mà user chat làm nhiều dòng rồi ấn enter theo thói quen thì hệ thống tự hộp lại trong một hợp thoại',
    time: '09:16 am',
  },
  {
    id: '3',
    type: 'send',
    message: 'Đây là nội dung chat của người dùng, không hiện avatar',
    status: 'seen',
  },
  {
    id: '4',
    type: 'send',
    message: 'Khi đã nhận nhưng chưa xem',
    status: 'sent',
  },
  {
    id: '5',
    type: 'send',
    message: 'Tin nhắn ko gửi được',
    status: 'error',
  },
  {
    id: '6',
    type: 'receive',
    message:
      'Khi mà user chat làm nhiều dòng rồi ấn enter theo thói quen thì hệ thống tự hộp lại trong một hợp thoại',
    time: '09:16 am',
  },
  {
    id: '7',
    type: 'send',
    message: 'Đây là nội dung chat của người dùng, không hiện avatar',
    status: 'seen',
  },
  {
    id: '8',
    type: 'receive',
    message:
      'Khi mà user chat làm nhiều dòng rồi ấn enter theo thói quen thì hệ thống tự hộp lại trong một hợp thoại',
    time: '09:16 am',
  },
  {
    id: '9',
    type: 'send',
    message: 'Đây là nội dung chat của người dùng, không hiện avatar',
    status: 'seen',
  },
];
export const mockDataContact = [
  {
    id: '1',
    name: 'Kiên Nguyễn',
    description: 'Nhân viên tự do',
  },
  {
    id: '2',
    name: 'Kiên trần',
    description: 'Giáo sư sử học',
  },
  {
    id: '3',
    name: 'Kiên Phạm',
    description: 'Tiêu đề',
  },
  {
    id: '4',
    name: 'Kiên Nguyễn',
    description: 'Nhân viên tự do',
  },
];
