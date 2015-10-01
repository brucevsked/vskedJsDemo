
moduleT

moduleId
moduleName
moduleDisName
moduleUrl
parentModuleId
--------------------------------------------------------------------------------
1  moduleT          module          ''            0
2  userT            user            ''            0
3  roleT            role            ''            0
4  userRoleT        userRole        ''            0
5  permissionT      permission      ''            0
6  rolePermissionT  rolePermission  ''            0
7  moduleTadd       moduleAdd       'moduleAdd'   1
8  productT         product         ''            0
9  productTadd      productAdd      'productAdd'  8
10 productTList     productList     'productList' 8
--------------------------------------------------------------------------------
userT

userId
userName
userPass
--------------------------------------------------------------------------------
1    admin    admin
2    user1    user1
3    user2    user2
--------------------------------------------------------------------------------
roleT

roleId
roleName
parentRoleId
--------------------------------------------------------------------------------
1    superAdmin    0
2    commonUser    0
3    guestUser     0
--------------------------------------------------------------------------------
userRoleT

userId
roleId
--------------------------------------------------------------------------------
1 1
2 2
3 3
--------------------------------------------------------------------------------
permissionT

permissionId
permissionName
permissionModuleId
parentPermissionId
--------------------------------------------------------------------------------
1    superAdmin    0    0
2    common        9    0
3    common        10   0
4    guest         10   0
--------------------------------------------------------------------------------
rolePermissionT

roleId
permissionId
--------------------------------------------------------------------------------
1    1
2    2
2    3
3    4
--------------------------------------------------------------------------------
productT

productId
productName
productPrice
productSum
ProductDescript
--------------------------------------------------------------------------------
1    apple    10    100    'this is apple'
2    orange   11    90     'orange ok'
3    banana   18    50     'here is banana'
--------------------------------------------------------------------------------