module.exports = function(grunt) {
	grunt.initConfig({
		typescript: {
			base: {
			  src: ['src/*.ts'],
			  dest: 'build',
			  options: {
				module: 'amd', //or commonjs 
				target: 'es5', //or es3 
				//basePath: 'src', //deprecated?
				sourceMap: true,
				declaration: true
			  }
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-typescript');		  

	grunt.task.registerTask('ts',['typescript']);

	grunt.task.registerTask('skriv','',function(){ 
        grunt.log.writeln('Skriver lite...');
    });
	
};
