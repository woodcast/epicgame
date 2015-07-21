module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            server: {
                command: 'java -cp L1.2-1.0-jar-with-dependencies.jar main.Main'
            }
        }, /* grunt-shell */

        fest: {
            templates: { /* ��������� */
                files: [{
                    expand: true,
                    cwd: 'templates', /* �������� ���������� */
                    src: '*.xml', /* ����� �������� */
                    dest: 'public_html/js/tmpl' /* �������������� ���������� */
                }],

                template : function (data) {
                    return gtunt.template.process(
                        'var <%= name %>Tmpl = <%= contents %> ;',
                        {data: data}
                    );
                }

            }
        } /* grunt-fest */
    });

    grunt.loadNpmTasks('grunt-shell')
    grunt.loadNpmTasks('grunt-fest')
}