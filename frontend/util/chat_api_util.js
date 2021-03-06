export const fetchChats = () =>
  $.ajax({
    method: 'GET',
    url: "/api/chats"
  });

export const sendMessage = message =>
  $.ajax({
    method: "POST",
    url: "/api/messages",
    data: { message }
  })
