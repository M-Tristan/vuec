class ArrayUtil {
  /**
   * 两个数组是否相同
   * @param {*} arr1
   * @param {*} arr2
   * @returns
   */
  static equal(arr1, arr2) {
    if (
      !Array.isArray(arr1) ||
      !Array.isArray(arr2) ||
      arr1.length != arr2.length
    ) {
      return false;
    }
    let arrmap = {};
    arr1.forEach((item) => {
      arrmap[item] = true;
    });
    for (let index = 0, length = arr2.length; index < length; index++) {
      if (!arrmap[arr2[index]]) {
        return false;
      }
    }
    return true;
  }
}

export default ArrayUtil;
