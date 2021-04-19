import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '1cd48b75-8100-4aeb-93f8-bf0ee8ccbc71'
  }
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  }
}

export const profileAPI = {
  getProfileInfo(userId) {
    return instance.get(`profile/${userId}`);
  },

  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },

  updateProfileStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type' : 'multipart/form-data',
      }
    });
  }
}

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login/`, { email, password, rememberMe });
  },

  logout() {
    return instance.delete(`auth/login/`);
  }
}

export const securityAPI = {
  getCaptcha() {
    return instance.get(`/security/get-captcha-url/`);
  },
}