import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1cd48b75-8100-4aeb-93f8-bf0ee8ccbc71'
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
}

export const profileAPI = {
  getProfileInfo(userId) {
    return instance.get(`profile/` + userId).then(response => response.data)
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => response.data);
  }
}