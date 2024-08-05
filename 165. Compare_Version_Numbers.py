class Solution(object):
    def compareVersion(self, version1, version2):
        v1 = list(map(int,version1.split(".")))
        v2 = list(map(int,version2.split(".")))

        for i in range(max(len(v1),len(v2))):
            v_1 = v1[i] if i < len(v1) else 0
            v_2 = v2[i] if i < len(v2) else 0

            if v_1 < v_2:
                return -1
            elif v_1 > v_2:
                return 1
        return 0

        